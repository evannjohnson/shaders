#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.7098, 0.898, 0.6941);
vec3 colorB = vec3(0.851, 0.6863, 0.949);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.x);

    float rShifttx = (sin(u_time * .9) + 1.) / 2.;
    float rShiftx = smoothstep(0.,rShifttx,st.x) - smoothstep(rShifttx,1.,st.x);
    pct.r = sin(rShiftx*PI / 2.);
    float gShifttx = (sin(u_time) + 1.) / 2.;
    float gShiftx = smoothstep(0.,gShifttx,st.x) - smoothstep(gShifttx,1.,st.x);
    // pct.g = sin(gShiftx*PI / 2.);
    float bShifttx = (sin(u_time * 1.2) + 1.) / 2.;
    float bShiftx = smoothstep(0.,bShifttx,st.x) - smoothstep(bShifttx,1.,st.x);
    pct.b = sin(bShiftx*PI / 2.);

    color = mix(colorA, colorB, pct);

    // Plot transition lines for each channel
    // color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    // color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    // color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

    gl_FragColor = vec4(color,1.0);
}
