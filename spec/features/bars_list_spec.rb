require "rails_helper"
feature "Bar list", js: true do
  scenario "View all bars in Park Slope" do
    visit '/'
    expect(page).to have_content "Park Slope Bars"
  end
end