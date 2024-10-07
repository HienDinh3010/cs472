class Meditation {
    constructor(duration) {
        this.duration = duration;
    }

    start() {
        console.log(`Start meditation`)
        let countdown = this.duration;

        const timer = setInterval(() => {
            if (countdown > 0) {
                console.log(countdown);
                countdown--;
            } else {
                clearInterval(timer);
                console.log('Jay Guru Dev')
            }
        }, 1000);
    }
}
const morning_meditation = new Meditation(5);
morning_meditation.start();

// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev