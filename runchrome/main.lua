function love.load()
	love.window.setMode(1080, 1920, {fullscreen=true, fullscreentype="desktop"})
	image = love.graphics.newImage("image.jpg")
end
function love.draw()
	love.graphics.draw(image, 0, 0)
end
function love.mousereleased(x, y, button)
	if button == "l" then
		if os.execute("google-chrome --kiosk --incognito http://localhost:3000/ &") then
			love.event.push ( "quit" )
		end
	end
end
function love.focus (f)
	if not f then
		love.event.push ( "quit" )
	end
end
