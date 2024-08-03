# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.





## deploying the app
## step 1 
install nodejs in to the vps 

## step 2
create a directory for this project 

## step3 
pull the code from the git repository 

## step4
run cmd npm install || npm install --force

## step 5
getinto the dist folder where build file exist 
cd /dist/build

## step 6 
install a server like nginx 
systemctl enable nginx
systemctl status nginx
if it is working fine 

## step 7 
copy the bild file into the var/www/html foldder
Note : index.html must be prsent once after we get into  var/www/html
we can create a pine from on build forder to her also to aoid this repeatation 

## step 8

run cmd Systemctl restart nginx

##check the brower seraching by ip address of your vps
