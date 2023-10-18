#ifdef GL_ES
precision mediump float;
#endif

#define PI = 3.14159

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.651, 0.6471, 0.8941);
vec3 colorB = vec3(0.5961, 0.7686, 0.6549);

void main() {
    vec3 color = vec3(0.0);

    // float pct = pow(abs(sin(u_time / 5.)),.1);
    float pct = 1. - sqrt(1. - pow(abs(sin(u_time)), -50.));
    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color,1.0);
}
