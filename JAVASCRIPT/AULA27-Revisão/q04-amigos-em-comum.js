const amigosItalo = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas'];

const amigosSamara = ['João', 'Carlos', 'Pedro', 'Ana', 'Fernanda'];

const amigosEmComum = amigosItalo.filter(amigo => amigosSamara.includes(amigo));

console.log(amigosEmComum);