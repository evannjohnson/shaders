#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.0157, 0.1412, 0.1451);
vec3 colorB = vec3(0.6353, 0.5529, 0.5529);

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
    float rShiftty = (sin(u_time * 1.15) + 1.) / 2.;
    float rShifty = smoothstep(0.,rShiftty,st.y) - smoothstep(rShiftty,1.,st.y);
    pct.r = (sin(rShiftx*PI / 2.) + sin(rShifty*PI / 2.)) / 2.;
    float gShifttx = (sin(u_time) + 1.) / 2.;
    float gShiftx = smoothstep(0.,gShifttx,st.x) - smoothstep(gShifttx,1.,st.x);
    float gShiftty = (sin(u_time * 1.32) + 1.) / 2.;
    float gShifty = smoothstep(0.,gShiftty,st.y) - smoothstep(gShiftty,1.,st.y);
    pct.g = (sin(gShiftx*PI / 2.) + sin(gShifty*PI / 2.)) / 2.;
    float bShifttx = (sin(u_time * 1.2) + 1.) / 2.;
    float bShiftx = smoothstep(0.,bShifttx,st.x) - smoothstep(bShifttx,1.,st.x);
    float bShiftty = (sin(u_time * .83) + 1.) / 2.;
    float bShifty = smoothstep(0.,bShiftty,st.y) - smoothstep(bShiftty,1.,st.y);
    pct.b = (sin(bShiftx*PI / 2.) + sin(bShifty*PI / 2.)) / 2.;

    color = mix(colorA, colorB, pct);

    // Plot transition lines for each channel
    // color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    // color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    // color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

    gl_FragColor = vec4(color,1.0);
}
