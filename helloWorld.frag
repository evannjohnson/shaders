#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec4 red(){
    return vec4(0.0, 1.0, 0.2667, 1.0);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float time = u_time / 1.0;
    float sinTime = sin(time);
    gl_FragColor = vec4(st.x + sinTime, st.y + sinTime, 0, 1.0);
}
