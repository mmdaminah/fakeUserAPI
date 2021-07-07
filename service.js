const _GetRandomPerson = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://randomuser.me/api/",
            dataType: "json",
            success: function (data) {
                resolve(data.results[0]);
            },
            error: function (error) {
                reject(error)
            }
        });
    });
};
