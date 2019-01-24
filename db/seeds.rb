# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Channel.destroy_all

demo_user = User.create!(username: "TestUser", password: "111111", email: "tester@email.com")
demo_channel = demo_user.channels.create!(name: "Test Channel", description: "A test channel!")
