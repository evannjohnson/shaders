#ifdef GL_ES
precision mediump float;
#endif

#include "lygia/draw/digits.glsl"

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2  u_mouse;

float radius = 0.25;
vec4 f_color;

float depth(float r, float x, float y) {
    return sqrt(r * r - x * x - y * y);
}

void main() {
    vec2 xy = gl_FragCoord.xy / u_resolution.xy;
    vec2 smouse_loc = u_mouse / u_resolution.xy * 2. - 1.;
    vec2 loc = xy * 2. - 1.0;
    vec3 color = vec3(0.0);

    float z = depth(radius, loc.x, loc.y);
    float dis = distance(vec2(0.0, 0.0), loc);
    if (dis <= radius) {
        color += vec3(loc.x, loc.y, z);
        color += vec3(0.2);
    }

    float zmouse = depth(radius, smouse_loc.x, smouse_loc.y);
    color += digits(xy - vec2(0.05,0.05), zmouse);
    // color += digits(xy - vec2(0.5, 0.0), radius);

    gl_FragColor = vec4(color, 1.0);
}
