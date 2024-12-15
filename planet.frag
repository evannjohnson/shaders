#ifdef GL_ES
precision mediump float;
#endif

#include "lygia/draw/digits.glsl"

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2  u_mouse;

float radius = 0.25;
vec4 f_color;

void main() {
    vec2 xy = gl_FragCoord.xy/u_resolution.xy;
    vec2 smouse = u_mouse/u_resolution.xy;
    vec2 loc = xy * 2. - 1.0;
    vec3 color = vec3(0.0);

    float z = sqrt(exp2(radius) - exp2(loc.x) - exp2(loc.y));
    float dis = distance(vec2(0.0, 0.0), loc);
    if (dis <= radius) {
        color += vec3(1.0);
    }

    color += digits(xy - vec2(0.05,0.05), smouse.x);
    // color += digits(xy - vec2(0.5, 0.0), radius);

    gl_FragColor = vec4(color, 1.0);
}
