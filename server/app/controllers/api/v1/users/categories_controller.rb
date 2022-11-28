module Api
  module V1
    module Users
      class CategoriesController < ApplicationController
        # before_action :authenticate_request_user
        # skip_before_action :authenticate_request_user, only: [:create]
        def index
          @category = Category.all
          render json: Category.all
        end

        def show
          @category = Category.find(params[:id])
          render json: @category, serializer: nil
        end

        def category_gym
          @gym = Category.where(name_category: 'gym')
          render json: @gym, each_serializer: ::Categories::CategoryGymSerializer
        end

        def category_cadio
          @cadio = Category.where(name_category: 'cadio').or(Category.where(name_category: 'fitness'))
          render json: @cadio, each_serializer:  ::Categories::CategoryCadioSerializer
        end

        private

        def category_params
          params.permit(:description, :name_category)
        end
      end
    end
  end
end
