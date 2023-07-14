function a() {
  return 'a'
}

const staticProps = () => { return 'static props' }
staticProps.appendix = 'APPENDIX'

Object.assign(a, staticProps)


console.log(
  a(),
  a.appendix
);
