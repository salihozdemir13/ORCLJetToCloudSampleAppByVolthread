# Create an image from a "builder" Docker image
FROM salihozdemir/ojetbuilder
 
# Copy all sources inside the new image
COPY . .
 
# Build the appliaction. As a result this will produce web folder.
RUN npm install
RUN ojet build
RUN ojet serve
 
 
# Create another Docker image which runs Jet application
# It contains Nginx on top of Alpine and our Jet appliction (web folder)
# This image is the result of the build and it is going to be stored in Docker Hub
FROM nginx:1.10.2-alpine
COPY --from=0 web /usr/share/nginx/html
EXPOSE 80