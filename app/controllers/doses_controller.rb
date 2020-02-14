class DosesController < ApplicationController
  def create
    @dose = Dose.new(dose_params)
    unless params[:dose][:ingredient].empty?
      ingredient = Ingredient.find(params[:dose][:ingredient])
      @dose.ingredient = ingredient
    end
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose.cocktail = @cocktail
    if @dose.save
      redirect_to cocktail_path(@cocktail)
    else
      render "cocktails/show"
    end
  end

  def destroy
    dose = Dose.find(params[:id])
    cocktail = dose.cocktail
    dose.destroy
    redirect_to cocktail_path(cocktail)
  end

  private

  def dose_params
    params.require(:dose).permit(:description)
  end
end
