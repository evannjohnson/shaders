#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_timeWizard;

const vec4 bgc = vec4(0.0); //%background color
const vec4 lc = vec4(0.40, 0.32, 0.832, 1.0); //%line color

void main() {

    float lw = 200.0 / u_resolution.y; //%line width

    vec2 uv = (gl_FragCoord.xy - .5 * u_resolution.xy ) / u_resolution.y ;
	// vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    // uv = uv - 0.5; //%move origin to (0.5, 0.5)
    // uv.x = uv.y * exp(uv.x) - .6;

    float line = cos(u_timeWizard)*uv.x + sin(u_timeWizard) * uv.y;//rotate rad per frame

    float alpha = smoothstep(0.0, lw, abs(line)); //%AA

    gl_FragColor = mix(lc, bgc, alpha);
}
