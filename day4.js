const { d } = require('./input/day4');

const valid = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
];
let count = 0;

(() => {
    d.forEach((e) => {
        let obj = {};
        const data = e.split('\n').join(' ');
        data.split(' ').forEach((e) => {
            const [k, v] = e.split(':');
            obj[k] = v;
        });
        for (let i = 0; i < valid.length; i++) {
            const value = obj[valid[i]];
            if (!value) return;
            switch (valid[i]) {
                case 'byr':
                    if (value.length != 4) return;
                    const b = parseInt(value);
                    if (b < 1920 || b > 2002) return;
                    break;
                case 'iyr':
                    if (value.length != 4) return;
                    const iy = parseInt(value);
                    if (iy < 2010 || iy > 2020) return;
                    break;
                case 'eyr':
                    if (value.length != 4) return;
                    const e = parseInt(value);
                    if (e < 2020 || e > 2030) return;
                    break;
                case 'hgt':
                    let h = value.split('cm');
                    if (h.length != 2) {
                        h = value.split('in');
                        if (h.length != 2) return;
                        h = parseInt(h[0]);
                        if (h < 59 || h > 76) return;
                    } else {
                        h = parseInt(h[0]);
                        if (h < 150 || h > 193) return;
                    }
                    break;
                case 'hcl':
                    if (!new RegExp('^#[0-9a-f]{6}$').test(value))
                        return;
                    break;
                case 'ecl':
                    const a = { 'amb': true, 'blu': true, 'brn': true, 'gry': true, 'grn': true, 'hzl': true, 'oth': true };
                    if (!a[value]) return;
                    break;
                case 'pid':
                    if (!new RegExp(/^.{9}$/).test(value)) return;

            }
            // console.log('here', valid[i])
        }
        count++;
    });
    console.log(count);
})(); 
