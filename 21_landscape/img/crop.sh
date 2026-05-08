for file in convdyst/*.png; do
  convert "$file" -resize 300x -trim -quality 90 -background none "./done/${file%.png}.png"
done
