const latinToCrylic = (string) => {
  const isRegisterInUpperCase = (symbol) => symbol === symbol.toUpperCase();
  const translit = {
    shh: "щ",
    zh: "ж",
    ch: "ч",
    sh: "ш",
    yu: "ю",
    ya: "я",
    jo: "ё",
    yo: "ё",
    ö: "ё",
    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "е",
    z: "з",
    i: "и",
    j: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф",
    h: "х",
    x: "х",
    c: "ц",
    w: "щ",
    "#": "ъ",
    y: "ы",
    "ʹ": "ь",
  };

  const keys = Object.keys(translit).sort((a, b) => b.length - a.length); // Sort by length to prioritize multi-character matches

  for (let i = 0, j = string.length; i < j; i++) {
    for (const key of keys) {
      const currentSubstring = string.slice(i, i + key.length);
      if (currentSubstring.toLowerCase() === key) {
        const translated =
          isRegisterInUpperCase(currentSubstring[0])
            ? translit[key].toUpperCase()
            : translit[key];

        string = string.slice(0, i) + translated + string.slice(i + key.length);
        j -= key.length - 1; // Adjust length for multi-character replacement
        break; // Move on to the next position after replacement
      }
    }
  }

  return string;
};

export default latinToCrylic;
