# Base image
FROM node:14.16.0-alpine

# Set the working directory
WORKDIR /app

# Copy both .json to working directory and Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files in directory to the working directory in Docker container
COPY . .

# Set environment variables
ENV PORT=5000
# ENV REACT_APP_SERVER_URL=http://localhost:5000
# ENV REACT_APP_API_URL=http://localhost:5000/api

# Port container will listen to
EXPOSE 5001

# Command will run when container start
CMD ["npm", "start"]