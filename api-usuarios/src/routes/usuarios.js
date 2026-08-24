const express = require('express')
const router = express.Router()
const usuarios = require('../data/usuarios')
router.get('/', (req, res) => {
res.status(200).json(usuarios)
})
router.post('/', (req, res) => {
  const { nome_usuario_auth, email_usuario_auth } = req.body

  if (!nome_usuario_auth || !email_usuario_auth) {
    return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' })
  }

  const novoId = usuarios[usuarios.length - 1].id_usuario_auth + 1
  const novoUsuario = { id_usuario_auth: novoId, nome_usuario_auth, email_usuario_auth }
  usuarios.push(novoUsuario)

  res.status(201).json({ data: novoUsuario })
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const usuario = usuarios.find(u => u.id_usuario_auth === id)
  
  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' })
  }
  
  res.status(200).json(usuario)
})

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = usuarios.findIndex(u => u.id_usuario_auth === id)
  
  if (index === -1) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' })
  }
  
  const { nome_usuario_auth, email_usuario_auth } = req.body
  usuarios[index] = { id_usuario_auth: id, nome_usuario_auth, email_usuario_auth }
  res.status(200).json(usuarios[index])
})

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = usuarios.findIndex(u => u.id_usuario_auth === id)
  
  if (index === -1) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' })
  }
  
  usuarios.splice(index, 1)
  res.status(200).json({ mensagem: 'Usuário removido com sucesso' })
})


module.exports = router