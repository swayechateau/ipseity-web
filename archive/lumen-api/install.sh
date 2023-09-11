docker-compose up
docker-compose exec lumen-portfolio-api composer install
docker-compose exec lumen-portfolio-api php artisan migrate --seed