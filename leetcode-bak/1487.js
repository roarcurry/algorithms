/**
 * [1487. 保证文件名唯一](https://leetcode.cn/problems/making-file-names-unique/)
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
    const map = new Map();
    return names.map((name) => {
        let i = 1;
        let _name = name;
        while (map.get(_name)) {
            _name = name + `(${i++})`;
        }
        map.set(_name, true);
        return _name;
    });
};

console.log(getFolderNames(['pes', 'fifa', 'gta', 'pes(2019)'])); // ["pes","fifa","gta","pes(2019)"]
console.log(getFolderNames(['gta', 'gta(1)', 'gta', 'avalon'])); // ["gta","gta(1)","gta(2)","avalon"]
console.log(
    getFolderNames([
        'onepiece',
        'onepiece(1)',
        'onepiece(2)',
        'onepiece(3)',
        'onepiece',
    ])
); // ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
