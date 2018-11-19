import yaml                 from 'js-yaml';

const Config = () => {
  const path = 'config.yml';

  try {
    return yaml.load(path);
  } catch (e) {
    console.log(e);
  }

  return false;
}

export default Config;
