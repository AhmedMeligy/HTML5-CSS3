self.onmessage = function (event) {
    if (event.data === 'calcSum1') {
        let s = 0;
        for (let i = 0; i < 1000000000; i++) {
            s += i;
        }
        self.postMessage(s);
    } else if (event.data === 'calcSum2') {
        let s = 0;
        for (let i = 0; i < 1234500000; i++) {
            s += i;
        }
        self.postMessage(s);
    }
};
