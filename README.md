"# shoufengqing" 

对之前html 版的手风琴进行改进，以前是css+js 控制，逻辑很复杂，现在改成纯css特效

微信小程序版的手风琴

其中托福课程，上下拉动的手风琴，用transition 进行改进，property，time,function,{transition:height 2s ease-in-out}

其中雅思课程，是左右拉动的手风琴，display:flex,会排列在一行，如果某个块加大了，超出限制，会把其他减小。总之会在一行，不会换行。

文字排序在一行的办法是，外面加个view，把这个view宽度写宽，然后overflow:hidden

