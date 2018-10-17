# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]
  before_action :get_tending_tags, only: [:edit, :update]
  before_action :get_user_videos, only: [:edit, :update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  # def create
  #   super
  # end

  # GET /resource/edit
  # def edit
  #   super
  # end

  def update
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    prev_unconfirmed_email = resource.unconfirmed_email if resource.respond_to?(:unconfirmed_email)

    resource_updated = update_resource(resource, account_update_params)
    yield resource if block_given?
    if resource_updated
      if is_flashing_format?
        flash_key = update_needs_confirmation?(resource, prev_unconfirmed_email) ?
          :update_needs_confirmation : :updated
        set_flash_message :notice, flash_key
      end
      bypass_sign_in resource, scope: resource_name
      respond_with resource, location: after_update_path_for(resource)
    else
      clean_up_passwords resource
      set_minimum_password_length
      respond_with resource
    end
  end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  def get_tending_tags
    @trending_tags = Tag.order(rank: :asc).limit(25)
  end

  def get_user_videos
    @user_videos = current_user.videos
                               .active
                               .tagged
                               .includes(:tag)
                               .order(created_at: :desc)
                               .limit(10)
  end

  def update_resource(resource, params)
    if  change_password_request?(params) && params[:password] != params[:password_confirmation]
      resource.errors.add(:password_confirmation, :confirmation, message: "doesn't match password")
      return false
    end

    resource.update_without_password(params)
  end

  def change_password_request?(params)
    params[:password].present? || params[:password_confirmation].present?
  end

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:channel_name])
  end

  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:channel_name, :channel_description])
  end

  def after_update_path_for(resource)
    edit_user_registration_path
  end

  def after_sign_up_path_for(resource)
    root_path
  end

  def after_inactive_sign_up_path_for(resource)
    root_path
  end
end
