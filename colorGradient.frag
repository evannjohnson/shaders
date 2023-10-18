#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.x);

    float rShiftt = (sin(u_time * .9) + 1.) / 2.;
    float rShift = smoothstep(0.,rShiftt,st.x) - smoothstep(rShiftt,1.,st.x);
    pct.r = sin(rShift*PI / 2.);
    float gShiftt = (sin(u_time) + 1.) / 2.;
    float gShift = smoothstep(0.,gShiftt,st.x) - smoothstep(gShiftt,1.,st.x);
    pct.g = sin(gShift*PI / 2.);
    float bShiftt = (sin(u_time * 1.2) + 1.) / 2.;
    float bShift = smoothstep(0.,bShiftt,st.x) - smoothstep(bShiftt,1.,st.x);
    pct.b = sin(bShift*PI / 2.);

    color = mix(colorA, colorB, pct);

    // Plot transition lines for each channel
    // color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    // color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    // color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

    gl_FragColor = vec4(color,1.0);
}
