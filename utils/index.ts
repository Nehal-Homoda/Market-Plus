

export const generateDeviceToken = (length = 32) => {
    // Define the characters to use in the token
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    
    // Generate a random token of the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }
    
    return token;
}
export const countDownTimerBySeconds=(seconds:number)=> {
    // if (!seconds) return {};
    
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    let d: number | string = days < 0 ? 0 : days;
    let h: number | string = hours < 0 ? 0 : hours;
    let m: number | string = minutes < 0 ? 0 : minutes;
    let s: number | string = remainingSeconds < 0 ? 0 : remainingSeconds;


    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    return {
        days:    d.toString(),
        hours:   h.toString(),
        minutes: m.toString(),
        seconds: s.toString(),
    }
}