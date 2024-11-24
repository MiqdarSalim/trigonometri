const specialAngles = {
  30: { sin: "\u00BD", cos: "\u00BD√3", tan: "\u2153√3" },
  45: { sin: "\u00BD√2", cos: "\u00BD√2", tan: "1" },
  60: { sin: "\u00BD√3", cos: "\u00BD", tan: "√3" },
  90: { sin: "1", cos: "0", tan: "undefined" },
  120: { sin: "\u00BD√3", cos: "-\u00BD", tan: "-√3" },
  135: { sin: "\u00BD√2", cos: "-\u00BD√2", tan: "-1" },
  150: { sin: "\u00BD", cos: "-\u00BD√3", tan: "-\u2153√3" },
  180: { sin: "0", cos: "-1", tan: "0" },
  210: { sin: "-\u00BD", cos: "-\u00BD√3", tan: "\u2153√3" },
  225: { sin: "-\u00BD√2", cos: "-\u00BD√2", tan: "1" },
  240: { sin: "-\u00BD√3", cos: "-\u00BD", tan: "√3" },
  270: { sin: "-1", cos: "0", tan: "undefined" },
  300: { sin: "-\u00BD√3", cos: "\u00BD", tan: "-√3" },
  315: { sin: "-\u00BD√2", cos: "\u00BD√2", tan: "-1" },
  330: { sin: "-\u00BD", cos: "\u00BD√3", tan: "-\u2153√3" },
  360: { sin: "0", cos: "1", tan: "0" },
};

const Sin = (degree) => {
  if (specialAngles[degree]) {
    return specialAngles[degree].sin;
  }
  const radian = (degree * Math.PI) / 180;
  const result = Math.sin(radian);
  return Math.round(result * 1e10) / 1e10; // Periksa toleransi
};

const Cos = (degree) => {
  if (specialAngles[degree]) {
    return specialAngles[degree].cos;
  }
  const radian = (degree * Math.PI) / 180;
  const result = Math.cos(radian);
  return Math.round(result * 1e10) / 1e10; // Periksa toleransi
};

const Tan = (degree) => {
  if (specialAngles[degree]) {
    return specialAngles[degree].tan;
  }
  const radian = (degree * Math.PI) / 180;
  const result = Math.tan(radian);
  const cosValue = Math.cos(radian);

  // Periksa jika cosValue mendekati nol
  if (Math.abs(cosValue) < 1e-10) {
    return "Undefined"; // Atau Anda bisa menggunakan Infinity
  }

  return Math.round(result * 1e10) / 1e10; // Periksa toleransi
};
