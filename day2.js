function t() {
    return pass.filter((e) => {
        const data = e.split(": ");
        const criterion = data[0].split(' ');
        const [min, max] = criterion[0].split('-');
        const letter = criterion[1];
        const p = data[1];
        const rule = `^([^${letter}]*${letter}){${min},${max}}[^${letter}]*$`;
        return new RegExp(rule).test(p);
    });
}

function t2() {
    return pass.filter((e) => {
        const data = e.split(": ");
        const criterion = data[0].split(' ');
        const [min, max] = criterion[0].split('-');
        const letter = criterion[1];
        const p = data[1];
        return (p[min - 1] == letter && p[max - 1] != letter) || (
            p[max - 1] == letter && p[min - 1] != letter);
    });
}

