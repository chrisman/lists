let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/workspace/tmp/FLAVIUS
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 Node.js
badd +13 spec/Node.spec.js
badd +369 term://.//25506:/bin/zsh
badd +28 List.js
badd +1 spec/List.spec.js
badd +17 Stack.js
badd +1 spec/Stack.spec.js
badd +17 Queue.js
badd +25 spec/Queue.spec.js
badd +1 term://.//26508:/bin/zsh
badd +1 CircularList.js
badd +1 spec/CircularList.spec.js
badd +1 ~/.dotfiles/vimrc
argglobal
silent! argdel *
argadd Node.js
set stal=2
edit CircularList.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 65 + 71) / 143)
exe '2resize ' . ((&lines * 25 + 22) / 44)
exe 'vert 2resize ' . ((&columns * 77 + 71) / 143)
exe '3resize ' . ((&lines * 15 + 22) / 44)
exe 'vert 3resize ' . ((&columns * 77 + 71) / 143)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 29 - ((28 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
29
normal! 0
wincmd w
argglobal
edit spec/CircularList.spec.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 6 - ((5 * winheight(0) + 12) / 25)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 0
wincmd w
argglobal
edit term://.//26508:/bin/zsh
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 15 - ((14 * winheight(0) + 7) / 15)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 0
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 65 + 71) / 143)
exe '2resize ' . ((&lines * 25 + 22) / 44)
exe 'vert 2resize ' . ((&columns * 77 + 71) / 143)
exe '3resize ' . ((&lines * 15 + 22) / 44)
exe 'vert 3resize ' . ((&columns * 77 + 71) / 143)
tabnew
set splitbelow splitright
wincmd t
set winheight=1 winwidth=1
argglobal
enew
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
tabnext 1
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
