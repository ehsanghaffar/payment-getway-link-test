export function isValidUrl(str) {
    let url;
    try {
        url = new URL(str);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export function isHttps(str) {
    let first8Chars = "";
    for (let i = 0; i < 8; i++) {
        first8Chars += str[i];
    }
    return first8Chars === "https://";
}

export function isValidPaymentGateway(str, callback) {
    const url = new URL(str);

    const gateways = ["asan.shaparak.ir", "bpm.shaparak.ir", "pec.shaparak.ir", "pecco.shaparak.ir", "sep.shaparak.ir", "sep2.shaparak.ir", "pep.shaparak.ir", "pna.shaparak.ir", "sadad.shaparak.ir", "ikc.shaparak.ir", "fanava.shaparak.ir", "fcp.shaparak.ir", "mabna.shaparak.ir", "ecd.shaparak.ir", "pas.shaparak.ir"];
    const companies = ["آسان پرداخت پرشین", "به پرداخت ملت", "تجارت الکترونیک پارسیان", "تجارت الکترونیک پارسیان", "پرداخت الکترونیک سامان", "پرداخت الکترونیک سامان", "پرداخت الکترونیک پاسارگاد", "پرداخت نوین آرین", "پرداخت الکترونیک سداد", "کارت اعتباری ایران کیش", "فن آوا کارت", "فن آوا کارت", "پرداخت الکترونیک سپهر", "الکترونیک کارت دماوند", "سایان کارت"];

    let theCompanyName;
    if (gateways.includes(url.hostname)) {
        const gate = gateways.findIndex((g) => g === url.hostname);
        theCompanyName = companies[gate];
        if (typeof callback === "function") {
            callback(true, theCompanyName);
        }
    } else {
        callback(false);
    }
}
