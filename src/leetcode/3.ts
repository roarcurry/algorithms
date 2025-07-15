/**
 * [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
 *
 * @description
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 *
 * @example
 * 示例 1:
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 示例 2:
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 * 示例 3:
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 * 提示：
 * 0 <= s.length <= 5 * 104
 * s 由英文字母、数字、符号和空格组成
 *
 * @remarks
 * 使用滑动窗口，窗口内没有重复字符，窗口的左边界为 start，右边界为 end，窗口的长度为 end - start + 1
 * 使用一个 map 记录字符及其索引，如果 map 中存在该字符，则将 start 更新为该字符的索引 + 1
 * 如果 map 中不存在该字符，则将该字符及其索引添加到 map 中
 * 每次更新窗口长度时，更新 maxLength
 */
function lengthOfLongestSubstring(s: string): number {
    let start = 0
    let maxLength = 0
    const map = new Map<string, number>()

    for (let end = 0; end < s.length; end++) {
        const char = s[end]

        const prev = map.get(char)
        if (typeof prev !== 'undefined' && prev >= start) {
            start = prev + 1
        }
        map.set(char, end)

        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1
        }
    }

    return maxLength
}

describe('3. 无重复字符的最长子串', () => {
    it('示例 1', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    })

    it('示例 2', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    })

    it('示例 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    })
})
