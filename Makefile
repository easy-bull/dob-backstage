-include .env # This directive includes the .env file but `-` means dont error if file is not found
export # This directive exports env variables to all make commands

dev:
	@echo "Starting development server..."
	@yarn dev
