# chess2pic web app

Web SPA for [chess2pic](https://github.com/xopoww/chess2pic).

## Running the app

Currently the app needs to be deployed "by hand":

1. Build and run [chess2pic API server](https://github.com/xopoww/chess2pic#api-server)
2. Build [SPA](./front/README.md)
3. Run the [server](./back/README.md)


## Running with Docker

chess2pic API server and web app are also available as Docker containers. You can get them
```bash
docker pull xopoww/chess2pic:latest
docker pull xopoww/chess2pic-web:latest
```
and run them locally
```bash
docker run -d -p 65000:8080 xopoww/chess2pic
docker run -d -p 9000:9000  xopoww/chess2pic-web
```

After that you can access the app on http://localhost:9000.

## License

This software is distributed under MIT License (see [LICENSE.txt](LICENSE.txt)).