class ExtraVideoDataService
  def initialize(video)
    @video = video
  end

  def call
    case @video.url
    when AppConstants::YOUTUBE_URL_REGEXP
      get_data_form_youtube_api
    when AppConstants::FACEBOOK_URL_REGEXP
      get_data_form_facebook_api
    when AppConstants::TWITCH_URL_REGEXP
      get_data_form_twitch_api
    when AppConstants::DAILY_MOTION_URL_REGEXP
      get_data_form_daily_motion_api
    else
      @video.errors.add(:invalid_url, 'Video url invalid')
    end
  end

  private

  def get_data_form_youtube_api
    if ENV['YT_API_KEY'].blank?
      return @video.errors.add(:credentials, 'YT_API_KEY is not set')
    end

    video_id = VideoHelper.get_video_id_form_youtube_url(@video.url)
    return @video.errors.add(:invalid_url, 'Oops, try a YouTube link instead.') if video_id.blank?

    api_data = SocialNetworks::YoutubeApiService.new(video_id).call
    return @video.errors.add(:invalid_url, 'This video cannot be embedded.') if api_data[:embeddable].blank?

    @video.kind_of = 'video'
    @video.source = 'youtube'
    @video.source_id = video_id
    @video.title = api_data[:title]
    @video.remote_cover_url = api_data[:remote_cover_url]
  rescue => e
    @video.errors.add(:invalid_url, 'Video url invalid')
  end

  def get_data_form_facebook_api
    if ENV['FACEBOOK_APP_ID'].blank? || ENV['FACEBOOK_APP_SECRET'].blank?
      return @video.errors.add(:credentials, 'FACEBOOK_APP_ID or FACEBOOK_APP_SECRET are not set')
    end

    video_id = VideoHelper.get_video_id_form_facebook_url(@video.url)
    return @video.errors.add(:invalid_url, 'Oops, try a Facebook video link instead.') if video_id.blank?

    api_data = SocialNetworks::FacebookApiService.new(video_id).call

    @video.kind_of = 'video'
    @video.source = 'facebook'
    @video.source_id = video_id
    @video.title = api_data[:title]
    @video.remote_cover_url = api_data[:remote_cover_url]
  rescue => e
    @video.errors.add(:invalid_url, 'Video url invalid')
  end

  def get_data_form_twitch_api
    return @video.errors.add(:credentials, 'TWITCH_APP_ID is not set') if ENV['TWITCH_APP_ID'].blank?

    video_id, type = VideoHelper.get_video_id_with_type_from_twitch_url(@video.url).values
    if video_id.blank? || type.blank?
      return @video.errors.add(:invalid_url, 'Oops, try a Twitch video link instead.')
    end

    api_data = SocialNetworks::TwitchApiService.new(video_id, type).call
    @video.kind_of = type
    @video.source = 'twitch'
    @video.source_id = video_id
    @video.title = api_data[:title]
    @video.remote_cover_url = api_data[:remote_cover_url]
  rescue => e
    @video.errors.add(:invalid_url, 'Video url invalid')
  end

  def get_data_form_daily_motion_api
    video_id = VideoHelper.get_video_id_form_daily_motion_url(@video.url)
    return @video.errors.add(:invalid_url, 'Oops, try a Daily Motion video link instead.') if video_id.blank?

    api_data = SocialNetworks::DailyMotionApiService.new(video_id).call
    @video.kind_of = 'video'
    @video.source = 'daily_motion'
    @video.source_id = video_id
    @video.title = api_data[:title]
    @video.remote_cover_url = api_data[:remote_cover_url]
  rescue => e
    @video.errors.add(:invalid_url, 'Video url invalid')
  end
end
