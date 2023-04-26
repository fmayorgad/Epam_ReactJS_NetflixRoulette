export class MoviesServices {

    async getMovieList() {

        const controller = new AbortController()
        const signal = controller.signal


        // Register a listenr.
        signal.addEventListener("abort", () => {
            console.log("aborted!")
        })

        var urlToFetch = "https://httpbin.org/delay/3";

        fetch(urlToFetch, {
            method: 'get',
            signal
        })
            .then(function (response) {
                console.log(`Fetch complete. (Not aborted)`);
            }).catch(function (err) {
                console.error(` Err: ${err}`);
            });

        function abortFetching() {
            console.log('Now aborting');
            // Abort.
            controller.abort()
        }
    }

}


