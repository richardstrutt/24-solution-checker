function solve24() {
    for (var e = [], r = 0; 4 > r; r++) {
        var a = parseInt(arrayInput[r].value);
        if (e.push(a), isNaN(a)) return void(p.innerHTML = "Not a number");
        if (!a) return void(p.innerHTML = "Empty boxes! Fill in a number!");
        if (a > 12 || 0 >= a) return void(p.innerHTML = "Enter between 1 to 12!")
    }
    var n = performance.now(),
        i = e.slice(0),
        s = ["(", "", "", "", ")"],
        c = ["(", "", "", "", ")"],
        t = [];
    e: for (var u = 0; 4 > u; u++) {
        i = e.slice(0);
        var o = i[u];
        s[1] = o, i.splice(u, 1);
        for (var d = 0; 3 > d; d++)
            for (var l = i.slice(0), m = l[d], b = 0; 6 > b; b++) {
                switch (l = i.slice(0), s[3] = m, b) {
                    case 0:
                        v = ad(o, m), s[2] = " + ", s[1] = o, s[3] = m;
                        break;
                    case 1:
                        v = su(o, m), s[2] = " - ", s[1] = o, s[3] = m;
                        break;
                    case 2:
                        v = su(m, o), s[2] = " - ", s[1] = m, s[3] = o;
                        break;
                    case 3:
                        v = mu(o, m), s[2] = " x ", s[1] = o, s[3] = m;
                        break;
                    case 4:
                        v = di(o, m), s[2] = " ÷ ", s[1] = o, s[3] = m;
                        break;
                    case 5:
                        v = di(m, o), s[2] = " ÷ ", s[1] = m, s[3] = o
                }
                l.splice(d, 1);
                var k = s.join("");
                c[1] = k;
                for (var y = l.slice(0), I = 0; 2 > I; I++)
                    for (var E = y[I], M = 0; 6 > M; M++) {
                        switch (y = l.slice(0), c[3] = E, M) {
                            case 0:
                                q = ad(v, E), c[2] = " + ", c[1] = k, c[3] = E;
                                break;
                            case 1:
                                q = su(v, E), c[2] = " - ", c[1] = k, c[3] = E;
                                break;
                            case 2:
                                q = su(E, v), c[2] = " - ", c[1] = E, c[3] = k;
                                break;
                            case 3:
                                q = mu(v, E), c[2] = " x ", c[1] = k, c[3] = E;
                                break;
                            case 4:
                                q = di(v, E), c[2] = " ÷ ", c[1] = k, c[3] = E;
                                break;
                            case 5:
                                q = di(E, v), c[2] = " ÷ ", c[1] = E, c[3] = k
                        }
                        y.splice(I, 1);
                        var g = c.join("");
                        t[0] = g;
                        for (var h = y.slice(0), w = 0; 6 > w; w++) {
                            var B = h[0];
                            switch (w) {
                                case 0:
                                    f = ad(q, B), t[1] = " + ", t[0] = g, t[2] = B;
                                    break;
                                case 1:
                                    f = su(q, B), t[1] = " - ", t[0] = g, t[2] = B;
                                    break;
                                case 2:
                                    f = su(B, q), t[1] = " - ", t[0] = B, t[2] = g;
                                    break;
                                case 3:
                                    f = mu(q, B), t[1] = " x ", t[0] = g, t[2] = B;
                                    break;
                                case 4:
                                    f = di(q, B), t[1] = " ÷ ", t[0] = g, t[2] = B;
                                    break;
                                case 5:
                                    f = di(B, q), t[1] = " ÷ ", t[0] = B, t[2] = g
                            }
                            if (24 === Math.round(100 * f) / 100) {
                                p.innerHTML = t.join("") + " = 24", f = null;
                                var H = performance.now() - n;
                                p2.innerHTML = "(" + Math.round(100 * H) / 100 + " ms)";
                                break e
                            }
                            p.innerHTML = "No solutions"
                        }
                    }
            }
    }
}

function ad(e, r) {
    return e + r
}

function su(e, r) {
    return e - r
}

function mu(e, r) {
    return e * r
}

function di(e, r) {
    return e / r
}
var p = document.getElementById("p"),
    p2 = document.getElementById("p2"),
    arrayInput = [document.getElementById("i1"), document.getElementById("i2"), document.getElementById("i3"), document.getElementById("i4")],
    v, q, f;