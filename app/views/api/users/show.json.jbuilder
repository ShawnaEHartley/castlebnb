json.user do
  json.extract! @user, :id, :email, :full_name, :created_at, :updated_at
end