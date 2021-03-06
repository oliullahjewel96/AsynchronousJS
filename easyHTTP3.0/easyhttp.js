class EasyHttp {
    //Make an HTTP GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make an HTTP post request

    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });

        const resData = await response.json();
        return resData;
    }

    //Make an HTTP put request

    async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });

        const resData = await response.json();
        return resData;
    }

    //Make an HTTP delete request

    async delete(url, data) {
        const response = await fetch(url, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });

        const resData = await "Resource deleted";
        return resData;
    }
}