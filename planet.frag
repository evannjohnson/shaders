#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float radius = 0.25;
vec4 f_color;

void main() {
    vec2 loc = gl_FragCoord.xy/u_resolution.xy * 2. - 1.0;
    float z = sqrt(exp2(radius) - exp2(loc.x) - exp2(loc.y));
    float dis = distance(vec2(0.0, 0.0), loc);
    if (dis <= radius) {
        f_color = vec4(1.0 * z);
    }
    gl_FragColor = f_color;
}
