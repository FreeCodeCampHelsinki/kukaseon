# KUKASEON

### Prerequisites
Make sure you've installed the following:
+ Node (Anything above v10 should do. Ensure npm is installed to)
+ Docker (including docker-engine and docker-compose)

### Instructions for use:

1) Clone the repo

2) Navigate into the "frontend" folder
    ``` 
    cd frontend
    ```

3) Rebuild the node modules
    ```
    npm install
    ```

4) Prepare the react app for deployment (You'll need to repeat this step before you run docker compose)
    ```
    npm run build
    ```

5) Back out to the parent folder
    ```
    cd ..
    ```

6) Spin up docker compose
    ```
    docker-compose up
    ```