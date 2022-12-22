<?php

function step($s1 = 5, $s2 = 8, $s3 = 9)
{

    now_step($s1);
    now_step($s2);
    now_step($s3);
}

function now_step($ostatok_stupeney)
{

    while ($ostatok_stupeney > 0) {
        if ($ostatok_stupeney >= 3) {
            echo 'шаг 3 ступени';
            $ostatok_stupeney -= 3;
        } elseif ($ostatok_stupeney == 2) {
            echo 'шаг 2 ступени';
            $ostatok_stupeney -= 2;
        } elseif ($ostatok_stupeney == 1) {
            echo 'шаг 1 ступень';
            $ostatok_stupeney -= 1;
        }
    }
}


step();
