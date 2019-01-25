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
user1 = User.create!(username: "another", password: "111111", email: "another@email.com")
user2 = User.create!(username: "Random", password: "111111", email: "random@email.com")

demo_channel = demo_user.channels.create!(name: "Test Channel", description: "A test channel!")
another_channel = user1.channels.create!(name: "Another Channel", description: "Another channel!")
