const esm = (name) => {
    console.log(`Hello ${name} from ESM!`);
};
esm('Behnood');

// Export optionnel si vous voulez importer cette fonction ailleurs
export default esm;