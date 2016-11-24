require "rails_helper"
feature "Bar list" do
  scenario "View all bars in Park Slope" do
    visit '/'
    expect(page).to have_content "Double Windsor"
  end
end