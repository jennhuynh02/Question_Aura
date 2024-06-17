require "application_system_test_case"

class QuestionsTest < ApplicationSystemTestCase
  setup do
    @question = questions(:one)
  end

  test "visiting the index" do
    visit questions_url
    assert_selector "h1", text: "Questions"
  end

  test "creating a Question" do
    visit questions_url
    click_on "New Question"

    fill_in "Ask", with: @question.ask
    fill_in "Asker", with: @question.asker_id
    fill_in "Asker type", with: @question.asker_type
    fill_in "Created at", with: @question.created_at
    fill_in "Topic", with: @question.topic_id
    fill_in "Updated at", with: @question.updated_at
    click_on "Create Question"

    assert_text "Question was successfully created"
    click_on "Back"
  end

  test "updating a Question" do
    visit questions_url
    click_on "Edit", match: :first

    fill_in "Ask", with: @question.ask
    fill_in "Asker", with: @question.asker_id
    fill_in "Asker type", with: @question.asker_type
    fill_in "Created at", with: @question.created_at
    fill_in "Topic", with: @question.topic_id
    fill_in "Updated at", with: @question.updated_at
    click_on "Update Question"

    assert_text "Question was successfully updated"
    click_on "Back"
  end

  test "destroying a Question" do
    visit questions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Question was successfully destroyed"
  end
end
