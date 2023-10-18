#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(abs(sin(u_time / 10.)),abs(sin(u_time / 9.)),abs(sin(u_time * (30. * abs(sin(u_time / 100.))))),1.0);
}
