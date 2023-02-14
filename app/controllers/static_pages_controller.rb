class StaticPagesController < ActionController::Base
  def frontend_index
    puts "I AM HERE\n\n\n"
    render file: Rails.root.join('public', 'index.html')
  end
end