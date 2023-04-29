function sphericalCoordinates(x: number, y: number): Point {
    return [
        Math.cos(x) * Math.cos(y),
        Math.sin(x) * Math.cos(y),
        Math.sin(y)
    ];
}

type Point = [x: number, y: number, z: number];

function NX(n: number, x: number): Point[] {
    const pts: Point[] = [];
    const start = -1 + 1 / (n - 1);
    const increment = (2 - 2 / (n - 1)) / (n - 1);
    for (let j = 0; j < n; j++) {
        const s = start + j * increment;
        pts.push(
            sphericalCoordinates(
                s * x,
                Math.PI / 2 * Math.sign(s) * (1 - Math.sqrt(1 - Math.abs(s)))
            )
        );
    }

    return pts;
}

export const generatePoints = (n: number): Point[] => NX(n, 0.1 + 1.2 * n);